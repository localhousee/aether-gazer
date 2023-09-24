<template>
  <Enemy
    name="ET <Scythe Waver>"
    image="et-scythe-waver.jpg"
    type="Visbanes"
    risk="I"
    description="The main character of the dance company's finale. Their delicate moves once combined the various dance styles of different Sephirah Zones, but have now become strange and aggresive."
    :intel="[
      'Originally a dancer with a unique style, after suffering the corruption of a Visbane, it maintains an obsession with dancing, but its attacks are brutal and fierce',
      'Wielding a massive scythe and hiding its true face, its unexpected and lightning-quick attacks catch enemies totally off guard.',
      'It always revels in its own performance. Upon detecting intruders, it swings its scythe wildly until the enemies are expelled.',
    ]"
    :skills="[
      {
        name: 'Slicing Strike',
        description: 'Swings its scythe twice at the enemy in close range.',
      },
      {
        name: 'Daunting Dance',
        description:
          'The Scythe Dancer charges up, then swings its scythe at enemies within range',
      },
      {
        name: 'Shifting Slash',
        description:
          'The Scythe Dancer flickers over to the enemy, then swings its scythe to deliver a powerful blow.',
      },
    ]"
  />
</template>
