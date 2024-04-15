import { Cliente } from "./models/cliente.ts";
import { Facade } from "./facade/cliente-facade.ts";

const lfc = new Cliente(
  "Luiz Caamargo",
  "luizcamargo",
  "lf.camargo@gmail.com",
);

const rcc = new Cliente(
  "Rafael Camargo",
  "rafaelcamargo",
  "rafael080909@gmail.com",
);

Facade.ClienteFacade.removeConta(lfc);
Facade.ClienteFacade.removeConta(rcc);
