using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace AAA_dev_squad.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class organizationsController : ControllerBase
    {
        // GET: api/organizations
        [HttpGet]
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
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
