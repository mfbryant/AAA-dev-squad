using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using api.models.interfaces;

namespace api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class organizationsController : ControllerBase
    {
        // GET: api/organizations
        [HttpGet(Name = "GetOrgs")]
        public List<Organization> Get()
        {
            IGetAllOrgs readObj = new ReadOrgData();
            return readObj.GetAllOrgs();
        }

        // GET: api/organizations/5
        [HttpGet("{id}", Name = "Get")]
        public string Get(int id)
        {
            return "value";
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
