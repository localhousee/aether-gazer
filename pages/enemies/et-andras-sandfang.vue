<template>
  <Enemy
    name="ET <Andras - Sandfang>"
    image="et-andras-sandfang.jpg"
    type="Visbanes"
    risk="I"
    description="A Visbane variant that appears is Nile ruins, it mutated after absorbing energy from the Gen-zone ruins."
    :intel="[
      'It appears in its full form without the need for the further corrosion to complete its metamorphosis. Having fully assumed its bestial form after breaking free from its bonds, it reveals its sharp claws and fangs as it stirs in the sand and dust.',
      'It can launch even stronger attacks at long range, and is additionally capable of deeper levels of thought.',
      'Covetous of the Imprint Power gathered here, it poses the greatest obstacle to Modifiers attempting to explore the Gen-zone ruins.',
    ]"
    :skills="[
      {
        name: 'Spikey Blades',
        description: `Summons sharp stone teeth from under the enemy's feet, which explode after a few seconds, dealing another round of damage.`,
      },
      {
        name: 'Sand Storm',
        description: 'Summons a sandstorm to strike the enemy.',
      },
    ]"
  />
</template>
