import { ITown } from "./itown";

export interface IArea {
        id:number,
        areaName:string,
        population : number,
        income : number,
        noOfDoctors:number,
        noOfChemist:number,
        noOfGovHospitals:number,
        noOfpvtHospitals:number,
        noOfsemiGovHospitals:number,
        remarks:string,
        town:ITown[]
}
