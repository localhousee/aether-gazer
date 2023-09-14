<template>
  <Enemy
    name="ET <Andras - Hater>"
    image="et-andras-hater.jpg"
    type="Visbanes"
    risk="I"
    description="A Visbane variant that appears is Shinou ruins, it mutated after absorbing energy from the Gen-zone ruins."
    :intel="[
      'It appears in its full form without the need for the further corrosion to complete its metamorphosis. Stained scarlet and covered in scars, it wanders in the specter of war with no hope of escape.',
      'It can launch even stronger attacks at long range, and is additionally capable of deeper levels of thought.',
      'Covetous of the Imprint Power gathered here, it poses the greatest obstacle to Modifiers attempting to explore the Gen-zone ruins.',
    ]"
    :skills="[
      {
        name: 'Ghostly Tether',
        description: `Creates a circular fissure under an enemy's feet, dealing continuous damage.`,
      },
      {
        name: 'Quacking Current',
        description: 'Unleashes a powerful shockwave at an enemy ahead.',
      },
    ]"
  />
</template>
