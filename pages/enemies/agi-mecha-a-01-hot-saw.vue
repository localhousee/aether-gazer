<template>
  <Enemy
    name="AGI Mecha A-01 <Hot Saw>"
    image="agi-mecha-a-01-hot-saw.jpg"
    type="AGI Mecha"
    risk="I"
    description="A small chainsaw-type AGI Mecha possessing some destructive power."
    :intel="[
      'A low-level AGI Mecha that is mainly responsible for transport and other assorted tasks in the Spealght factory.',
      `While fitted with chainsaws or either side for quick and efficient cutting of items, it's actually relatively quiet.`,
      'It gets very irritable when its work is interfered with.',
    ]"
    :skills="[
      {
        name: 'Hot Saw Rush',
        description:
          'Brings both saw arms together and strikes forward at full force.',
      },
      {
        name: 'Deadly Spin',
        description:
          'Charges modes and spins rapidly at the enemy for a period of time.',
      },
    ]"
  />
</template>
