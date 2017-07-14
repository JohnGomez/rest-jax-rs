package br.com.rest.controllers;

import br.com.rest.util.HibernateUtil;
import br.com.rest.entidades.Produto;
import java.util.List;
import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import org.hibernate.Session;
import org.hibernate.Transaction;

/**
 *
 * @author johngomes
 */
@Path("produto")
public class ProdutoController {

    @GET
    @Produces("application/json")
    public List<Produto> listar() throws InterruptedException {
       //Thread.sleep(9000);
        Session session = HibernateUtil.getSessionFactory().openSession();
        return session.createCriteria(Produto.class).list();
    }

    @POST
    @Consumes("application/json")
    public void salvar(Produto produto) {
        Session session = HibernateUtil.getSessionFactory().openSession();
        Transaction trans = session.beginTransaction();

        session.save(produto);
        trans.commit();
        session.close();
    }
    
    
 


}
