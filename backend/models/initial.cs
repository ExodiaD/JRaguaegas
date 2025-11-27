using System;
using System.ComponentModel.DataAnnotations;

public class Cliente
{
    public int Id { get; set;}

    [Required]
    public string Nome { get; set;}
    public string Telefone { get; set;}
    public string Email { get; set;}
    public string Endereço {get; set;}
    public DateTime DataCadastro { get; set;}
}

