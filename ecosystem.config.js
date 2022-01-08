module.exports = {
    apps: [
      {
        name: 'a3-newpawspawshouse',
        exec_mode: 'fork',
        instances: '1', // Or a number of instances
        script: 'npm run serve',
        args: 'start'
      }
    ]
  }