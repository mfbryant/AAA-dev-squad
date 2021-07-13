using MySql.Data.MySqlClient;
using api.models.interfaces;

namespace api.models
{
    public class SaveOrg : ISaveOrg
    {
        public static void CreateOrgTable()
        {
            ConnectionString myConnection = new ConnectionString();
            string cs = myConnection.cs;

            using var con = new MySqlConnection(cs);
            con.Open();

            string stm = @"CREATE TABLE organizations(orgID INTEGER PRIMARY KEY AUTO_INCREMENT, orgName TEXT, orgDeets TEXT, insta TEXT,  twitter TEXT, linkedIn TEXT, facebook TEXT)";

            using var cmd = new MySqlCommand(stm, con);
            cmd.ExecuteNonQuery();
        }

        public void AddOrg(Organization org)
        {

        }

        void ISaveOrg.SaveOrg(Organization org)
        {

        }
    }
}