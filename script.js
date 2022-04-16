const pokemon={"charmander":{"abilities": [    {"name":"blaze"},    {"name":"solar-power"}  ],"base_experience": 62,"height": 6,"id": 4,"is_default": true,"name":"charmander","order": 5,"stats": [    {"base_stat": 39,"effort": 0,"stat": {"name":"hp"}    },    {"base_stat": 52,"effort": 0,"stat": {"name":"attack"}    },    {"base_stat": 43,"effort": 0,"stat": {"name":"defense"}    },    {"base_stat": 60,"effort": 0,"stat": {"name":"special-attack"}    },    {"base_stat": 50,"effort": 0,"stat": {"name":"special-defense"}    },    {"base_stat": 65,"effort": 1,"stat": {"name":"speed"}    }  ],"types": [    {"slot": 1,"type": {"name":"fire"}    }  ],"weight": 85},"charmeleon":{"abilities": [    {"name":"blaze"},    {"name":"solar-power"}  ],"base_experience": 142,"height": 11,"id": 5,"is_default": true,"name":"charmeleon","order": 6,"stats": [    {"base_stat": 58,"effort": 0,"stat": {"name":"hp"}    },    {"base_stat": 64,"effort": 0,"stat": {"name":"attack"}    },    {"base_stat": 58,"effort": 0,"stat": {"name":"defense"}    },    {"base_stat": 80,"effort": 1,"stat": {"name":"special-attack"}    },    {"base_stat": 65,"effort": 0,"stat": {"name":"special-defense"}    },    {"base_stat": 80,"effort": 1,"stat": {"name":"speed"}    }  ],"types": [    {"slot": 1,"type": {"name":"fire"}    }  ],"weight": 190},"charizard":{"abilities": [    {"name":"blaze"},    {"name":"solar-power"}  ],"base_experience": 240,"height": 17,"id": 6,"is_default": true,"name":"charizard","order": 7,"stats": [    {"base_stat": 78,"effort": 0,"stat": {"name":"hp"}    },    {"base_stat": 84,"effort": 0,"stat": {"name":"attack"}    },    {"base_stat": 78,"effort": 0,"stat": {"name":"defense"}    },    {"base_stat": 109,"effort": 3,"stat": {"name":"special-attack"}    },    {"base_stat": 85,"effort": 0,"stat": {"name":"special-defense"}    },    {"base_stat": 100,"effort": 0,"stat": {"name":"speed"}    }  ],"types": [    {"slot": 1,"type": {"name":"fire"}    },    {"slot": 2,"type": {"name":"flying"}    }  ],"weight": 905}}

const nm=document.getElementsByTagName("h1")[0]
const type=document.getElementsByClassName("types")[0]
const abils=document.getElementsByClassName("abilities")[0]



const typecolors={"fire":"rgb(255,0,0)","flying":"rgb(125,125,255"}

function loadPokemon(name){
    while(type.children.length!=0){type.removeChild(type.children[0])}
    while(abils.children.length!=0){abils.removeChild(abils.children[0])}
    let poke=pokemon[name]
    //do the name
    nm.innerHTML=poke.name
    //type
    for(let typee of poke.types){
        let tp=document.createElement("div")
        tp.style.backgroundColor=typecolors[typee.type.name]
        tp.innerHTML=typee.type.name
        type.appendChild(tp)
    }
    //then abilities
    for(let abilit of poke.abilities){
        console.log(abilit)
        let tp=document.createElement("div")
        tp.style.backgroundColor="rgb(225,225,125)"
        tp.innerHTML=abilit.name
        abils.appendChild(tp)
    }
    //height

    //id

    //stats

    //load the image now
}


loadPokemon("charmander")