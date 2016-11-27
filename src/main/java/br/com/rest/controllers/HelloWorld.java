package br.com.rest.controllers;

import br.com.rest.util.HibernateUtil;
import java.util.ArrayList;
import java.util.List;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import org.hibernate.Session;

@Path("cliente")
public class HelloWorld {
	
	@GET
	@Produces({"application/json"})
	public List<Pessoa> hello(){
		Session session = HibernateUtil.getSessionFactory().openSession();
                List<Pessoa> pessoas = session.createCriteria(Pessoa.class).list();
                session.close();
                return pessoas;
	}

}
