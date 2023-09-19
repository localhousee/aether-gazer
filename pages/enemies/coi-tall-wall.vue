<template>
  <Enemy
    name="COI <Tall Wall>"
    image="coi-tall-wall.jpg"
    type="Humanoid"
    risk="II"
    description="A heavy-duty armed security force standing at two meters tall and boasting formidable combat power."
    :intel="[
      `Iron Security members were predominately selected directly from the Former Children of Iron union. The most outstanding and strongest among them are personally appointed by Ethan as squad leader's and given the tittle &quot;High Wall&quot.`,
      'Each High Wall leads a security squad of several people. While their combat qualifications may vary, the unity amongst them is undeniable.',
      'With their powerful physiques and elite-standard heavy armor, High Walls can hold their own in combat extremely capably as well as act as a strong shield for their squad.',
    ]"
    :skills="[
      {
        name: 'Reload Blaze',
        description:
          'High Wall leaps near an enemy and deal AoE damage, then opens fire on enemies ahead with a heavy-duty flamethrower.',
      },
      {
        name: 'Clean Sweeper',
        description:
          'High Wall chucks out a bomb, dealing damage to enemies ahead.',
      },
      {
        name: 'Line Breaker',
        description:
          'High Wall enters Sweep Mode and sprays the left, right, and front with the bullets.',
      },
    ]"
  />
</template>
