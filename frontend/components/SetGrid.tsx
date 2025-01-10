import { Set } from "@/types";
import { SetItem } from "./SetItem";

interface Props {
    sets: Set[];
}

export const SetGrid = ({sets}: Props) =>{
    return (
        <div className="flex flex-wrap gap-10 items-center justify-center"> 
        { 
          sets.map( set => (
            <SetItem key={set.id} set={set}/>
          ))
        }
      </div>
    )
}