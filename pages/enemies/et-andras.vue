<template>
  <Enemy
    name="ET <Andras>"
    image="et-andras.jpg"
    type="Visbanes"
    risk="I"
    description="The products of a human thoroughly corrupted by a Visbane. Wielding a staff-like weapon, it unleashes ranged attacks while maintaining a proud stance."
    :intel="[
      `A species formed by a human being was fully corrupted by a Visbane that entered the Surface Layer through a rift. Lacking a autonomous consciousness, it's akin to a worker bee that acts on the will of its queen.`,
      'It uses a staff-like weapon in ranged attacks and is capable of simple thought, making it somewhat of a threat.',
      'These corrupted humans usually possess impressive intelligence prior to being turned into Visbanes.',
    ]"
    :skills="[
      {
        name: 'Scorching Fissure',
        description: `Creates a circular fissure under an enemy's feet, dealing continuous damage.`,
      },
      {
        name: 'Spatial Shockwave',
        description: 'Unleashes a powerful shockwave at an enemy ahead.',
      },
    ]"
  />
</template>
