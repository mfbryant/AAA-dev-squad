using MySql.Data.MySqlClient;
using System.Collections.Generic;
using api.models.interfaces;

//changed namespace to api on all files - reevaluate if errors
namespace api.models
{
    public class ReadOrgData : IGetAllOrgs, IGetOrg
    {
        public List<Organization> GetAllOrgs()
        {
            ConnectionString myConnection = new ConnectionString();
            string cs = myConnection.cs;
            using var con = new MySqlConnection(cs);
            con.Open();

            string stm = @"SELECT * from organizations";
            using var cmd = new MySqlCommand(stm, con);

            MySqlDataReader rdr = cmd.ExecuteReader();

            List<Organization> orgs = new List<Organization>();
            while (rdr.Read())
            {
                Organization x = new Organization()
                {
                    OrgId = int.Parse(rdr["orgId"].ToString()),
                    OrgName = rdr["orgName"].ToString(),
                    OrgDeets = rdr["orgDeets"].ToString(),
                    Insta = rdr["insta"].ToString(),
                    Twitter = rdr["twitter"].ToString(),
                    LinkedIn = rdr["linkedIn"].ToString(),
                    Facebook = rdr["facebook"].ToString(),
                };
                orgs.Add(x);
            }

            return orgs;
        }

        public Organization GetOrg(int id)
        {
            ConnectionString myConnection = new ConnectionString();
            string cs = myConnection.cs;
            using var con = new MySqlConnection(cs);
            con.Open();

            string stm = "SELECT * FROM organizations WHERE orgId=@orgId";
            using var cmd = new MySqlCommand(stm, con);
            cmd.Parameters.AddWithValue("@orgId", id);
            cmd.Prepare();
            MySqlDataReader rdr = cmd.ExecuteReader();

            rdr.Read();
            return new Organization()
            {
                OrgId = int.Parse(rdr["orgId"].ToString()),
                OrgName = rdr["orgName"].ToString(),
                OrgDeets = rdr["orgDeets"].ToString(),
                Insta = rdr["insta"].ToString(),
                Twitter = rdr["twitter"].ToString(),
                LinkedIn = rdr["linkedIn"].ToString(),
                Facebook = rdr["facebook"].ToString(),
            };
        }
    }
}