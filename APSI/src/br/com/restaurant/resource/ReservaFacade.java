package br.com.restaurant.resource;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

@Path("/reservaFacade")
public class ReservaFacade {
	
	@GET // utilizando apenas o verbo GET, ou seja, vou apenas ler o recurso
    @Produces(MediaType.APPLICATION_JSON)// define qual tipo MIME é retornado para o cliente
	@Path("/exibir")
    public Response exibir(){
        return Response.ok("chamada realizada com sucesso!").build();
    }
}
