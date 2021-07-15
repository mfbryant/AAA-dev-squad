using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Cors;
using api.models;
using api.models.interfaces;

namespace api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class organizationsController : ControllerBase
    {
        // GET: api/organizations
        [EnableCors("AnotherPolicy")]
        [HttpGet(Name = "GetOrgs")]
        public List<Organization> Get()
        {
            IGetAllOrgs readOrg = new ReadOrgData();
            return readOrg.GetAllOrgs();
        }

        // GET: api/organizations/5
        [EnableCors("AnotherPolicy")]
        [HttpGet("{id}", Name = "GetOrg")]
        public Organization Get(int id)
        {
            IGetOrg readOrg = new ReadOrgData();
            return readOrg.GetOrg(id);
        }

        // POST: api/organizations
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

        // PUT: api/organizations/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE: api/organizations/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
