module.exports = () => ({
    // Other plugin configurations...
    
    'generate-schema': {
      enabled: true,
      config: {
        // Define where the schemas should be generated
        destination: './src/schemas', 
        
        // Set the format of the schema files (either json or yaml)
        format: 'json', // or 'yaml'
        
        // // Optional: List of models to include in schema generation
        // models: ['model-name1', 'model-name2'], 
      }
    }
  });
  