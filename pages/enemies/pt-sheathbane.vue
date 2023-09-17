<template>
  <Enemy
    name="PT <Sheathbane>"
    image="pt-sheathbane.jpg"
    type="Visbanes"
    risk="I"
    description="A Primal Type Visbane possessing a similar structure to that of marine life, with sharp spikes jutting out from its entire body."
    :intel="[
      `While they usually remain hidden in the ocean and are rarely sighted, their impact on marine navigation can't be ignored.`,
      `Since there's no way to determine their population size, Modifiers must periodically be dispatched to cull them.`,
      `Using their spiny bodies as a weapon, they'll launch sudden attacks from under the water's surface. They must be handled with caution.`,
    ]"
    :skills="[
      {
        name: 'Flickering Laser',
        description:
          'Leaps out from the water and quickly fires a laser at the enemy.',
      },
      {
        name: 'Surface Tension',
        description:
          'Folds its body into a special form, then rapidly charges forward at the distant enemy to attack.',
      },
    ]"
  />
</template>
