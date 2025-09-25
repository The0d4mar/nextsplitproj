import { ExpenseCategory, IncomeCategory, NoteProps, Operation } from "@/interfaces/interfaces";

export function useSeparateData(data: Operation[]){
    const incomeData:NoteProps[] = []
    const expendData:NoteProps[] = []

    for(let operation of data){
        if(Object.values(IncomeCategory).includes(operation.category as IncomeCategory)){
            let flag = false
            for(let note of incomeData){
                if(note.Категория == operation.category){
                    note.Значение+=operation.amount
                    flag = true
                    break
                }
            }
            if(flag){
                continue
            }
             else{
                incomeData.push({'Категория': operation.category, 'Значение': operation.amount})
            }
        } else{

            let flag = false
            for(let note of expendData){
                if(note.Категория == operation.category){
                    note.Значение+=operation.amount
                    flag = true
                    break
                }
            }
            if(flag){
                continue
            }
             else{
                expendData.push({'Категория': operation.category, 'Значение': operation.amount})
        }
    }
}

    return [incomeData, expendData]
}