using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Cars.Domain.Entities;

namespace Cars.Controllers
{
    [Produces("application/json")]
    [Route("api/Car")]
    public class CarController : Controller
    {
        public CarController()
        {

        }

        // GET: api/Car
        [HttpGet]
        public IEnumerable<Car> Get()
        {
            return new Car[] {
                new Car() { Name = "my Name", Produced = DateTime.Now }
            };
        }

        // GET: api/Car/5
        [HttpGet("{id}", Name = "Get")]
        public string Get(int id)
        {
            return "value";
        }
        
        // POST: api/Car
        [HttpPost]
        public void Post([FromBody]DateTime value)
        {
            string s = "";
        }
        
        // PUT: api/Car/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody]string value)
        {
        }
        
        // DELETE: api/ApiWithActions/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
