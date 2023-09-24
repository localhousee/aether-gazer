<template>
  <Enemy
    name="AGI Mecha A-01 <Welding Torch>"
    image="agi-mecha-a-01-welding-torch.jpg"
    type="AGI Mecha"
    risk="I"
    description="A small welding torch-type AGI Mecha possessing some destructive power."
    :intel="[
      'A low-level AGI Mecha that is mainly responsible for transport and other assorted tasks in the Spealght factory.',
      'Specializes in raged attacks and control measures. Lacking a means of either escape or counterattack, dealing with it up close is pretty easy, but its threat is greater at mid- to long-range distances.',
      'Standing between it and its workbench is inadvisable, as it may regard you as an item in need of soldering.',
    ]"
    :skills="[
      {
        name: 'Energized Solder Strike',
        description:
          'Launches a long-range artillery strike at an enemy ahead.',
      },
      {
        name: 'Charged Scattershot',
        description:
          'Charges up a laser cannon and fires at enemies ahead.',
      },
    ]"
  />
</template>
