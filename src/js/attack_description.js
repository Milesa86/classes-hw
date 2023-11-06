
export default function attackDescription (character) {
   return character.special.map(({id, name, description = 'Описание недоступно', icon}) => ({id, name, description, icon}))
} 