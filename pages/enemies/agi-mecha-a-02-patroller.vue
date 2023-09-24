<template>
  <Enemy
    name="AGI Mecha A-02 <Patroller>"
    image="agi-mecha-a-02-patroller.jpg"
    type="AGI Mecha"
    risk="I"
    description="A small patrol-type AGI Mecha that uses a laser emitted from a device in its head to scan's visitor's identities."
    :intel="[
      'As an AGI Mecha responsible for detection within Spealght Industries, its main task pertain to detection and maintaining order.',
      'It will issue an alert at the first sign of any hidden danger that may threaten the safety of the factory.',
      'Due to the excessive sensitivity of the system on board to the surrounding environment, some of its combat capabilities have been reduced to pervert unintended damage.',
    ]"
    :skills="[
      {
        name: 'Rapid Laser Fire',
        description: 'Quick fires lasers at enemies ahead.',
      },
      {
        name: 'Floating Artillery Strike',
        description: 'Charges up a laser cannon and fires at enemies ahead.',
      },
    ]"
  />
</template>
