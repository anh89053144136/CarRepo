using Microsoft.EntityFrameworkCore;
using Cars.Domain.Entities;

namespace Cars.Domain
{
    public class DBContext : DbContext
    {
        DbSet<Car> Cars { set; get; }
    }
}
