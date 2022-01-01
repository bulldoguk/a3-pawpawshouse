module.exports = {
    apps: [
      {
        name: 'a3-bulldoguk-boilerplate',
        exec_mode: 'fork',
        instances: '1', // Or a number of instances
        script: 'npm run serve',
        args: 'start'
      }
    ]
  }