using Microsoft.EntityFrameworkCore;

public class AppDbContext : DbContext
{
    public DbSet<Cliente> Clientes { get; set; }

    public AppDbContext(DbContextOptions<AppDbContext> options)
        : base(options)
    {
    }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        // Configuração extra pode ser feita aqui
        base.OnModelCreating(modelBuilder);
    }
}