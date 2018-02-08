using Cars.Domain.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Cars.Domain.Interfaces
{
    public interface ICarRepo
    {
        IQueryable<Car> GetAll();
    }
}
