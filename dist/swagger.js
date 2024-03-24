import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'web-service',
            version: '1.0.0',
            description: 'web-service test',
        },
    },
    apis: ['./server.ts'],
    components: {
        schemas: {
            Post: {
                type: 'object',
                properties: {
                    id: {
                        type: 'integer',
                        description: 'ID del post',
                    },
                    title: {
                        type: 'object',
                        properties: {
                            rendered: {
                                type: 'string',
                                description: 'Titolo del post',
                            },
                        },
                    },
                    // altre proprietà
                },
            },
        },
    },
    paths: {
        '/posts': {
            get: {
                summary: 'Recupera tutti i post',
                responses: {
                    200: {
                        description: 'Successful response',
                        content: {
                            'application/json': {
                                schema: {
                                    type: 'array',
                                    items: {
                                        $ref: '#/components/schemas/Post'
                                    }
                                }
                            }
                        }
                    },
                    500: {
                        description: 'Internal Server Error'
                    }
                }
            }
        },
        '/posts-filtered': {
            get: {
                summary: 'Recupera i post filtrati per titolo e numero',
                parameters: [
                    {
                        name: 'title',
                        in: 'query',
                        description: 'Testo da cercare nei titoli dei post',
                        required: true,
                        schema: {
                            type: 'string',
                            example: 'Titolo del Post',
                        }
                    },
                    {
                        name: 'items',
                        in: 'query',
                        description: 'Numero massimo di post da restituire',
                        required: true,
                        schema: {
                            type: 'integer',
                            example: 10,
                        }
                    }
                ],
                responses: {
                    200: {
                        description: 'Successful response',
                        content: {
                            'application/json': {
                                schema: {
                                    type: 'array',
                                    items: {
                                        $ref: '#/components/schemas/Post'
                                    }
                                }
                            }
                        }
                    },
                    500: {
                        description: 'Internal Server Error'
                    }
                }
            }
        },
        '/': {
            get: {
                summary: 'Restituisce un messaggio di benvenuto',
                responses: {
                    200: {
                        description: 'Messaggio di benvenuto restituito con successo',
                        content: {
                            'text/plain': {
                                schema: {
                                    type: 'string',
                                    example: 'Benvenuto'
                                }
                            }
                        }
                    },
                    500: {
                        description: 'Errore interno del server'
                    }
                }
            }
        }
    }
};
const swaggerSpec = swaggerJSDoc(options);
export const swaggerDocs = (app) => {
    app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
};
