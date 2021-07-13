using System.Collections.Generic;
using api.models.interfaces;

namespace api.models
{
    public class ReadOrgData : IGetAllOrgs, IGetOrg
    {
        public List<Organization> GetAllOrgs()
        {
            //add connection string
            //changed namespace to api on all files - reevaluate if errors

        }

        public Organization GetOrg(int id)
        {

        }
    }
}