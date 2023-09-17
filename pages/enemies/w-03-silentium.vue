<template>
  <Enemy
    name="W-03 <Silentium>"
    image="w-03-silentium.jpg"
    type="AGI Mecha"
    risk="I"
    description="Development to blend in with the elegant environment of Stellaris Academy, this security AGI Mecha possesses the aesthetically-pleasing bearing of a statue. Even through the students and city residents are aware of the existence of this type of mecha, they still occasionally find themselves startled by its sudden movements !"
    :intel="[
      'With its superior detection capabilities and maneuverability, this type of AGI Mecha is normally used for surveillance and to warn of ill-intentioned intruders.',
      'To ensure its maneuverability, the designers were repeatedly forced to reduce its weight untill the original design criteria could be met.',
      `While it may not have stand-out combat capabilities, its excellent detection system can instantaneously pick up signs of danger when it's carrying out patrol missions.`,
    ]"
    :skills="[
      {
        name: 'Beam Pulse',
        description:
          'Gathers energy, then fires a high-energy pulse at enemies ahead.',
      },
      {
        name: 'Silent Darkness',
        description:
          'Unleashes a circular energy filed around it that slows enemies within it.',
      },
    ]"
  />
</template>
