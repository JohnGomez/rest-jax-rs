package br.com.rest.controllers;

import java.util.ArrayList;
import java.util.List;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

@Path("hello")
public class HelloWorld {
	
	@GET
	@Produces({"application/json"})
	public List<Pessoa> hello(){
		Pessoa pessoa = new Pessoa();
		Pessoa pessoa2 = new Pessoa();
		List<Pessoa> pesssoas = new ArrayList<>();
		pesssoas.add(pessoa);
		pesssoas.add(pessoa2);
		return pesssoas;	
	}

}
