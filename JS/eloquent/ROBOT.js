/*ROBOT */
function UCL_Champion(chelsea){
    if(chelsea === true ) return "Your line has been blocked"
    else return "Only God knows your fate"
}
console.log(UCL_Champion(true))

const roads = [
    "Alice's House-Bob's House", "Alice's House-Cabin",
    "Alice's House-Post Office", "Bob's House-Town Hall",
    "Daria's House-Ernie's House", "Daria's House-Town Hall",
    "Ernie's House-Grete's House", "Grete's House-Farm",
    "Grete's House-Shop", "Marketplace-Farm",
    "Marketplace-Post Office", "Marketplace-Shop",
    "Marketplace-Town Hall", "Shop-Town Hall"
    ];

 function buildGraph(edges){
     let graph = Object.create(null)
     function addEdge(from , to){
         if(graph[from] == null){
           graph[from] = [to]
         }
         graph[from].push(to)
     }
     for(let [from, to] in edges.map( r => r.split('-'))){
         addEdge(from , to)
         addEdge(to, from)
     }
     return graph
 }   
 const roadGraph = buildGraph(roads)
 console.log(roadGraph)

 class VillageState{
     contructor(place, percels){
         this.place = place
         this.percels = percels
       }
     move(destination){
        if(!roadGraph[this.place].includes(destination)){
            return this
        }
        else{
            let percels = this.percels.map(p =>{
                if (p.place != this.place) return p;
                return {place: destination, Adress: p.address }
            }).filter(p => p.place != p.address )
            return new VillageState(destination, percels)
        } 
     }    
 }

 let first = new VillageState(
    "Post Office",
    [{place: "Post Office", address: "Alice's House"}]
    );
    let next = first.move("Alice's House");

// function clear(){
   
//     for(let [from, to] in roads.map( r => r.split('-'))){
//         console.log(`from route ${from} to route ${to}` )
//     }
//     let new_r =  roads.map( r =>  r.split('-'))
//    return new_r
    
// }
// console.log(clear())
 