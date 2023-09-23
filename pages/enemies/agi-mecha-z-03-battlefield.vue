<template>
  <Enemy
    name="AGI Mecha Z-03 <Battlefield>"
    image="agi-mecha-z-03-battlefield.jpg"
    type="AGI Mecha"
    risk="II"
    description="This towering form features an anthropomorphic structure and is capable of impressive maneuverability."
    :intel="[
      'With reduced armor resistance, firepower, and energy consumption make it more strategic when used to capture cities in large-scale wars',
      'Trading in some of its heavy firepower equipment for an advanced humanoid structure both increases its mobility and significantly reduces the required material costs and production time, making it ready for mass production.',
      'They operate quite orderly as a collective, even their attack movements are highly precise.',
    ]"
    :skills="[
      {
        name: 'Strike Operation',
        description:
          'Activates a jet propulsion system to rush towards the target and send them flying with a sharp weapon.',
      },
      {
        name: 'Fixed Strike',
        description: 'Charges up and sprint forward.',
      },
      {
        name: 'Armed Evolution',
        description:
          'Enter Enhanced Mode, increasing skill speed and shortening attack intervals.',
      },
    ]"
  />
</template>
