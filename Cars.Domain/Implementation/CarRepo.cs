using Cars.Domain.Entities;
using Cars.Domain.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Cars.Domain.Implementation
{
    public class CarRepo : ICarRepo
    {
        private DBContext dbContext = new DBContext();

        public IQueryable<Car> GetAll()
        {
            return new Car[] {
                new Car() { Name = "my Name", Produced = DateTime.Now }
            }.AsQueryable();
        }
    }
}
