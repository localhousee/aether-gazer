<template>
  <Enemy
    name="AGI Mecha A-01 <Forklift>"
    image="agi-mecha-a-01-forklift.jpg"
    type="AGI Mecha"
    risk="I"
    description="A compact AGI Mecha capable of shuttling back and forth though narrow spaces to carry out tasks."
    :intel="[
      'A low-level AGI Mecha that is mainly responsible for transport and other assorted tasks in the Speedlght factory.',
      'Despite being the most under-appreciate of the factory staff, it still works diligently to complete its daily tasks.',
      `It can occasionally be spotted in the factory's corner silently practicing its hauling skills on scap containers.`,
    ]"
    :skills="[
      {
        name: 'Slam',
        description:
          'Left and right mechanical arms slam forward in succession at the enemy.',
      },
      {
        name: 'Shovel Bash',
        description:
          'Both arms shovel violently forward, knocking enemies its in path into the air.',
      },
    ]"
  />
</template>
