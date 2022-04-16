const pokemon={"charmander":{"abilities": [    {"name":"blaze"},    {"name":"solar-power"}  ],"base_experience": 62,"height": 6,"id": 4,"is_default": true,"name":"charmander","order": 5,"stats": [    {"base_stat": 39,"effort": 0,"stat": {"name":"hp"}    },    {"base_stat": 52,"effort": 0,"stat": {"name":"attack"}    },    {"base_stat": 43,"effort": 0,"stat": {"name":"defense"}    },    {"base_stat": 60,"effort": 0,"stat": {"name":"special-attack"}    },    {"base_stat": 50,"effort": 0,"stat": {"name":"special-defense"}    },    {"base_stat": 65,"effort": 1,"stat": {"name":"speed"}    }  ],"types": [    {"slot": 1,"type": {"name":"fire"}    }  ],"weight": 85},"charmeleon":{"abilities": [    {"name":"blaze"},    {"name":"solar-power"}  ],"base_experience": 142,"height": 11,"id": 5,"is_default": true,"name":"charmeleon","order": 6,"stats": [    {"base_stat": 58,"effort": 0,"stat": {"name":"hp"}    },    {"base_stat": 64,"effort": 0,"stat": {"name":"attack"}    },    {"base_stat": 58,"effort": 0,"stat": {"name":"defense"}    },    {"base_stat": 80,"effort": 1,"stat": {"name":"special-attack"}    },    {"base_stat": 65,"effort": 0,"stat": {"name":"special-defense"}    },    {"base_stat": 80,"effort": 1,"stat": {"name":"speed"}    }  ],"types": [    {"slot": 1,"type": {"name":"fire"}    }  ],"weight": 190},"charizard":{"abilities": [    {"name":"blaze"},    {"name":"solar-power"}  ],"base_experience": 240,"height": 17,"id": 6,"is_default": true,"name":"charizard","order": 7,"stats": [    {"base_stat": 78,"effort": 0,"stat": {"name":"hp"}    },    {"base_stat": 84,"effort": 0,"stat": {"name":"attack"}    },    {"base_stat": 78,"effort": 0,"stat": {"name":"defense"}    },    {"base_stat": 109,"effort": 3,"stat": {"name":"special-attack"}    },    {"base_stat": 85,"effort": 0,"stat": {"name":"special-defense"}    },    {"base_stat": 100,"effort": 0,"stat": {"name":"speed"}    }  ],"types": [    {"slot": 1,"type": {"name":"fire"}    },    {"slot": 2,"type": {"name":"flying"}    }  ],"weight": 905}}

const nome=document.getElementsByTagName("h1")[0]
const type=document.getElementsByClassName("types")[0]
const abilityes=document.getElementsByClassName("abilities")[0]
const stats=document.getElementsByClassName("stats")[0]


const typeColors={"fire":"rgb(255,0,0)","flying":"rgb(125,125,255"}
const statColors={"speed":"rgb(225,225,055)","attack":"rgb(205,105,105)","hp":"rgb(255,0,0)","defense":"rgb(105,105,105)","special-attack":"rgb(225,155,155)","special-defense":"rgb(55,55,55)"}
function loadPokemon(name){
    while(type.children.length!=0){type.removeChild(type.children[0])}
    while(abilityes.children.length!=0){abilityes.removeChild(abilityes.children[0])}
    while(stats.children.length!=0){stats.removeChild(stats.children[0])}
    let poke=pokemon[name]
    //do the name
    nome.innerHTML=poke.name
    //type
    for(let type2electricBoogaloo of poke.types){
        let placeholder=document.createElement("div")
        placeholder.style.backgroundColor=typeColors[type2electricBoogaloo.type.name]
        placeholder.innerHTML=type2electricBoogaloo.type.name
        type.appendChild(placeholder)
    }
    //then abilities
    for(let abilit of poke.abilities){
        console.log(abilit)
        let placeholder=document.createElement("div")
        placeholder.style.backgroundColor="rgb(225,225,125)"
        placeholder.innerHTML=abilit.name
        abilityes.appendChild(placeholder)
    }
    //height

    //id

    //stats
    for(let stat of poke.stats){
        console.log(stat)
        let placeholder=document.createElement("div")
        placeholder.style.backgroundColor=statColors[stat.stat.name]
        placeholder.style.textAlign="center"
        placeholder.innerHTML=stat.stat.name+"<br>"+stat.base_stat
        stats.appendChild(placeholder)
    }
    //load the image now
}


loadPokemon("charmander")