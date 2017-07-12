package br.com.rest.controllers;

import br.com.rest.util.HibernateUtil;
import br.com.rest.entidades.Produto;
import java.util.List;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import org.hibernate.Session;

/**
 *
 * @author johngomes
 */
@Path("produto")
public class ProdutoController {
    
    @GET
    @Produces("application/json")
    public List<Produto> listar(){
        Session session = HibernateUtil.getSessionFactory().openSession();
        return session.createCriteria(Produto.class).list();
    }
    
}
