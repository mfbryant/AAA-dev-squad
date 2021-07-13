using System.Collections.Generic;

namespace api.models.interfaces
{
    public interface IGetAllOrgs
    {
        List<Organization> GetAllOrgs();
    }
}