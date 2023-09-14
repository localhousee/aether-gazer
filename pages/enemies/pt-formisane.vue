<template>
  <Enemy
    name="PT <Formisane>"
    image="pt-formisane.jpg"
    type="Visbanes"
    risk="I"
    description="Has a large, round head, the surface of which it almost entirety occupied by a single huge eye."
    :intel="[
      'Like the prototype of all Visbanes, their activity can be traced the farthest back of all Visbanes types since observations of them were first made.',
      'Holding a sharp lances honed by corroded crystals, they like to operate in groups within the Source Layer.',
      'While they pose a limited threat individually, their tendency to form huge swarms and emerge from layer rifts like a plagues of locusts is what torments Modifiers the most after Quakes...',
    ]"
    :skills="[
      {
        name: 'Soldier Ant Sting',
        description: 'Strikes an enemy with its lance.',
      },
      {
        name: 'Cross Cut',
        description: 'Cuts an enemy with its lance in a cross shape.',
      },
    ]"
  />
</template>
