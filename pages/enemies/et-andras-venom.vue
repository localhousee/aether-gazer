<template>
  <Enemy
    name="ET <Andras - Venom>"
    image="et-andras-venom.jpg"
    type="Visbanes"
    risk="I"
    description="A Visbane variant that appears is Yggdrasill ruins, it mutated after absorbing energy from the Gen-zone ruins."
    :intel="[
      'It appears in its full form without the need for the further corrosion to complete its metamorphosis. A foul fluid has muddied its entire body, turning it into a agent of malice that erodes at the great tree.',
      'It can launch even stronger attacks at long range, and is additionally capable of deeper levels of thought.',
      'Covetous of the Imprint Power gathered here, it poses the greatest obstacle to Modifiers attempting to explore the Gen-zone ruins.',
    ]"
    :skills="[
      {
        name: 'Poison Firefly: Rush',
        description:
          'Waves its staff to summon a swarm of bugs, then orders them to rush forward at enemies.',
      },
      {
        name: 'Poison Firefly: Slash',
        description: 'Swings its staff to slash diagonally at the enemy.',
      },
      {
        name: 'Poison Firefly: Veil',
        description: `Swings its staff to summon a cloud of poisonous mist from the under the enemy's feet.`,
      },
    ]"
  />
</template>
