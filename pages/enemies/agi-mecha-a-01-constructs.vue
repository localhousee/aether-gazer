<template>
  <Enemy
    name="AGI Mecha A-01 <Constructs>"
    image="agi-mecha-a-01-constructs.jpg"
    type="AGI Mecha"
    risk="II"
    description="A combination type AGI Mecha whose combat power is greatly enhanced through synergy."
    :intel="[
      'Where it was once three types of basic AGI Mecha rather lacking in combat strength, combining them led to a fundamental change.',
      'The maneuverability of the forklift, the close-ranged combat capabilities of the chainsaw, and the ranged output of the welding torch are each perfectly showcased in the assemblage.',
      'This reciprocal combination method was reportedly derived from the technology of a far-flung civilization. The engineers that designed these three basic AGI Mechas never would have imaged that they could take this form.',
    ]"
    :skills="[
      {
        name: 'Seismic Bombardment',
        description:
          'Leaps back and smashes into the ground before spinning its saw arms in a high-speed attack.',
      },
      {
        name: 'Formation Breaker',
        description: 'Charges power up and breaks into a long-distance dash.',
      },
      {
        name: 'Cohesion Shield',
        description:
          'Switches to a defensive stance, then raises its shield to defend against attacks.',
      },
    ]"
  />
</template>
