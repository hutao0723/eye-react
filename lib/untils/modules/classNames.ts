/**
 * 合并class 
 */
const classNames = (...parrmas:any[]):string => {
    let mergeClass:string = "";

    parrmas.forEach((item) => {
        if(typeof(item) === "object"){
            Object.keys(item).forEach((el) =>{
                if(item[el]){
                    if(mergeClass){
                        mergeClass+=` ${el}`    
                    }else{
                        mergeClass+=`${el}`     
                    }
                }
            })
        }else{
            if(item){
                if(mergeClass){
                    mergeClass+=` ${item}`    
                }else{
                    mergeClass+=`${item}`     
                }
            }
        }
    })

    return mergeClass
}

export default classNames