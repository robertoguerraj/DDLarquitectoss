import casaEMA from "./CasaEMA/CasaEMA";
import casaMezquite from "./CasaMezquite/CasaMezquite";
import casaPC from "./CasaPC2/CasaPC2";
import casaRL from "./CasaRL/CasaRL";
import pizzaHut from "./PizzaHut/PizzaHut";

export type ProjectKeys = "casaEma" | "casaRL" | "casaMezquite" | "casaPC2" | "pizzaHut";

export interface ProjectContentModel {
  principalImage: string;
  images: string[];
  title: string;
  location: string;
  year: string;
  description: string;
}

function getProjectContent ( projectKey: ProjectKeys) {
  switch(projectKey) {
    case 'casaEma':
      return casaEMA;
    case 'casaRL':
      return casaRL;
    case 'casaPC2':
      return casaPC;
    case "casaMezquite":
      return casaMezquite;
    case "pizzaHut":
      return pizzaHut;
  }
};

export default getProjectContent;
