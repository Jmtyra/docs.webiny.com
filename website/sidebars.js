module.exports = {
    docs: [
        "introduction",
        {
            "Webiny Overview": [
                "webiny-overview/intro",
                {
                    type: "category",
                    label: "Performance Benchmark",
                    items: [
                        "webiny-overview/performance-benchmark/introduction",
                        "webiny-overview/performance-benchmark/headless-cms-write-benchmark",
                        "webiny-overview/performance-benchmark/headless-cms-read-benchmark",
                        "webiny-overview/performance-benchmark/pb-deliver-a-page"
                    ]
                },
                {
                    type: "category",
                    label: "Serverless CMS",
                    items: [
                        {
                            type: "category",
                            label: "Apps",
                            items: [
                                "webiny-overview/serverless-cms/apps/intro",
                                "webiny-overview/serverless-cms/apps/headless-cms",
                                "webiny-overview/serverless-cms/apps/page-builder",
                                "webiny-overview/serverless-cms/apps/form-builder",
                                "webiny-overview/serverless-cms/apps/file-manager"
                            ]
                        }
                    ]
                },
                "webiny-overview/security"
            ],
            Tutorials: [
                "tutorials/install-webiny",
                {
                    type: "category",
                    label: "Create Custom Application",
                    items: [
                        "tutorials/create-custom-application/introduction",
                        "tutorials/create-custom-application/getting-started",
                        "tutorials/create-custom-application/graphql-api",
                        {
                            type: "category",
                            label: "React Application",
                            items: [
                                "tutorials/create-custom-application/react-application/introduction",
                                "tutorials/create-custom-application/react-application/layout",
                                "tutorials/create-custom-application/react-application/new-pin-modal-dialog",
                                "tutorials/create-custom-application/react-application/homepage",
                                "tutorials/create-custom-application/react-application/pin-details-page"
                            ]
                        }
                        /* {
                             type: "category",
                             label: "Security",
                             items: [
                                 "tutorials/create-custom-application/security/introduction",
                                 "tutorials/create-custom-application/security/getting-started",
                                 {
                                     type: "category",
                                     label: "Cloud Infrastructure",
                                     items: [
                                         "tutorials/create-custom-application/security/cloud-infrastructure/adding-user-pool-and-user-pool-domain",
                                         "tutorials/create-custom-application/security/cloud-infrastructure/adding-user-pool-client",
                                         "tutorials/create-custom-application/security/cloud-infrastructure/adjusting-webiny-config-ts-configuration-file",
                                     ],
                                 },
                                 {
                                     type: "category",
                                     label: "React Application",
                                     items: [
                                         "tutorials/create-custom-application/security/react-application/initial-setup",
                                         "tutorials/create-custom-application/security/react-application/integrating-hosted-ui-authentication-flow",
                                     ],
                                 },
                                 {
                                     type: "category",
                                     label: "GraphQL API",
                                     items: [
                                         "tutorials/create-custom-application/security/graphql-api/initial-setup",
                                         "tutorials/create-custom-application/security/graphql-api/implementing-authentication-and-authorization-checks",
                                     ],
                                 },
                                 "tutorials/create-custom-application/security/conclusion",
                             ],
                         },*/
                    ]
                },
                {
                    type: "category",
                    label: "Extend Admin Area",
                    items: [
                        "tutorials/extend-admin-area/introduction",
                        "tutorials/extend-admin-area/getting-started",
                        "tutorials/extend-admin-area/extending-entities",
                        // "tutorials/extend-admin-area/testing",
                        {
                            type: "category",
                            label: "Security",
                            items: [
                                "tutorials/extend-admin-area/security/introduction",
                                "tutorials/extend-admin-area/security/graphql-api",
                                "tutorials/extend-admin-area/security/admin-area"
                            ]
                        }
                    ]
                },
                {
                    type: "category",
                    label: "Headless CMS",
                    items: [
                        "tutorials/headless-cms/create-a-webiny-headless-cms-custom-field-plugin"
                    ]
                },
                {
                    type: "category",
                    label: "Page Builder",
                    items: [
                        "tutorials/page-builder/create-a-new-page-element",
                        "tutorials/page-builder/customize-an-existing-page-builder-element"
                    ]
                },
                {
                    type: "category",
                    label: "Webiny CLI",
                    items: ["tutorials/webiny-cli/adding-custom-commands"]
                },
                "tutorials/create-a-package-in-webiny-project"
            ],
            "How-to Guides": [
                {
                    type: "category",
                    label: "Deployment",
                    items: [
                        "how-to-guides/deployment/deploy-your-project",
                        "how-to-guides/deployment/destroy-cloud-infrastructure",
                        "how-to-guides/deployment/preview-deployments",
                        "how-to-guides/deployment/execute-pulumi-commands",
                        "how-to-guides/deployment/connect-custom-domain",
                        {
                            type: "category",
                            label: "AWS",
                            items: [
                                "how-to-guides/deployment/aws/configure-aws-credentials",
                                "how-to-guides/deployment/aws/use-aws-profiles"
                            ]
                        }
                    ]
                },
                {
                    type: "category",
                    label: "Scaffolding",
                    items: [
                        "how-to-guides/scaffolding/introduction",
                        "how-to-guides/scaffolding/full-stack-application",
                        "how-to-guides/scaffolding/graphql-api",
                        "how-to-guides/scaffolding/extend-graphql-api",
                        "how-to-guides/scaffolding/extend-admin-area",
                        "how-to-guides/scaffolding/react-application",
                        "how-to-guides/scaffolding/ci-cd"
                    ]
                },
                {
                    type: "category",
                    label: "Integrations",
                    items: ["how-to-guides/integrations/integrate-tailwindcss"]
                },
                {
                    type: "category",
                    label: "Webiny Applications",
                    items: [
                        {
                            type: "category",
                            label: "Admin Area",
                            items: [
                                "how-to-guides/webiny-applications/admin-area/api-playground",
                                "how-to-guides/webiny-applications/admin-area/change-logo",
                                "how-to-guides/webiny-applications/admin-area/customize-navigation-menu"
                            ]
                        },
                        {
                            type: "category",
                            label: "File Manager",
                            items: [
                                "how-to-guides/webiny-applications/file-manager/create-a-file-type-plugin"
                            ]
                        },
                        {
                            type: "category",
                            label: "Page Builder",
                            items: [
                                "how-to-guides/webiny-applications/page-builder/extend-graphql-api",
                                "how-to-guides/webiny-applications/page-builder/extend-page-settings"
                            ]
                        },
                        {
                            type: "category",
                            label: "Headless CMS",
                            items: [
                                "how-to-guides/webiny-applications/headless-cms/create-a-webiny-headless-cms-field-plugin",
                                "how-to-guides/webiny-applications/headless-cms/create-a-content-model-form-layout",
                                "how-to-guides/webiny-applications/headless-cms/using-graphql-api",
                                "how-to-guides/webiny-applications/headless-cms/extend-graphql-api",
                                "how-to-guides/webiny-applications/headless-cms/rendering-rich-text",
                                "how-to-guides/webiny-applications/headless-cms/content-model-plugins"
                            ]
                        },
                        {
                            type: "category",
                            label: "Themes",
                            items: [
                                "how-to-guides/webiny-applications/themes/introduction",
                                {
                                    type: "category",
                                    label: "Page Builder",
                                    items: [
                                        "how-to-guides/webiny-applications/themes/page-builder/introduction",
                                        "how-to-guides/webiny-applications/themes/page-builder/colors",
                                        "how-to-guides/webiny-applications/themes/page-builder/elements",
                                        "how-to-guides/webiny-applications/themes/page-builder/layouts"
                                    ]
                                },
                                {
                                    type: "category",
                                    label: "Form Builder",
                                    items: [
                                        "how-to-guides/webiny-applications/themes/form-builder/introduction",
                                        "how-to-guides/webiny-applications/themes/form-builder/layouts"
                                    ]
                                }
                            ]
                        }
                    ]
                },
                "how-to-guides/importing-plugins",
                "how-to-guides/extend-graphql-api",
                "how-to-guides/environment-variables",
                "how-to-guides/use-watch-command",
                "how-to-guides/upgrade-webiny"
            ],
            "Key Topics": [
                {
                    type: "category",
                    label: "Project Organization",
                    items: [
                        "key-topics/project-organization/project-applications-and-packages",
                        "key-topics/project-organization/project-applications",
                        "key-topics/project-organization/monorepo-organization"
                    ]
                },
                {
                    type: "category",
                    label: "Webiny Applications",
                    items: [
                        {
                            type: "category",
                            label: "Headless CMS",
                            items: ["key-topics/webiny-applications/headless-cms/graphql-api"]
                        }
                    ]
                },
                {
                    type: "category",
                    label: "UI Composer",
                    items: [
                        "key-topics/ui-composer/introduction",
                        "key-topics/ui-composer/building-views",
                        "key-topics/ui-composer/creating-elements"
                    ]
                },
                {
                    type: "category",
                    label: "Deployment",
                    items: [
                        "key-topics/deployment/introduction",
                        "key-topics/deployment/iac-with-pulumi",
                        "key-topics/deployment/environments"
                    ]
                },
                {
                    type: "category",
                    label: "CI/CD",
                    items: [
                        "key-topics/ci-cd/introduction",
                        "key-topics/ci-cd/environments",
                        "key-topics/ci-cd/version-control",
                        "key-topics/ci-cd/cloud-infrastructure-state-files",
                        "key-topics/ci-cd/testing",
                        "key-topics/ci-cd/workflows"
                    ]
                },
                {
                    type: "category",
                    label: "Cloud Infrastructure",
                    items: [
                        "key-topics/cloud-infrastructure/introduction",
                        {
                            type: "category",
                            label: "API",
                            items: [
                                "key-topics/cloud-infrastructure/api/introduction",
                                "key-topics/cloud-infrastructure/api/overview",
                                "key-topics/cloud-infrastructure/api/graphql-requests",
                                "key-topics/cloud-infrastructure/api/file-upload",
                                "key-topics/cloud-infrastructure/api/file-download",
                                "key-topics/cloud-infrastructure/api/overview-vpc-default",
                                "key-topics/cloud-infrastructure/api/overview-vpc-custom"
                            ]
                        },
                        {
                            type: "category",
                            label: "Admin Area",
                            items: [
                                "key-topics/cloud-infrastructure/admin/introduction",
                                "key-topics/cloud-infrastructure/admin/overview",
                                "key-topics/cloud-infrastructure/admin/serving-application-files"
                            ]
                        },
                        {
                            type: "category",
                            label: "Website",
                            items: [
                                "key-topics/cloud-infrastructure/website/introduction",
                                "key-topics/cloud-infrastructure/website/overview",
                                "key-topics/cloud-infrastructure/website/prerendering-pages",
                                "key-topics/cloud-infrastructure/website/serving-pages"
                            ]
                        }
                    ]
                },
                {
                    type: "category",
                    label: "Security Framework",
                    items: [
                        "key-topics/security-framework/introduction",
                        "key-topics/security-framework/api-security",
                        "key-topics/security-framework/react-security"
                    ]
                },
                "key-topics/tools-libraries",
                "key-topics/plugins",
                "key-topics/multi-tenancy",
                "key-topics/webiny-cli"
            ],
            References: [
                {
                    type: "category",
                    label: "Headless CMS",
                    items: ["references/headless-cms/plugins"]
                },
                {
                    type: "category",
                    label: "Page Builder",
                    items: ["references/page-builder/plugins"]
                },
                {
                    type: "category",
                    label: "Form Builder",
                    items: ["references/form-builder/plugins"]
                }
            ]
        },
        {
            Contributing: ["contributing/documentation", "contributing/new-page-template"]
        },
        {
            "Release Notes": [
                {
                    type: "category",
                    label: "5.17.0",
                    items: ["release-notes/5.17.0/changelog", "release-notes/5.17.0/upgrade-guide"]
                },
                {
                    type: "category",
                    label: "5.16.0",
                    items: ["release-notes/5.16.0/changelog", "release-notes/5.16.0/upgrade-guide"]
                },
                {
                    type: "category",
                    label: "5.15.0",
                    items: ["release-notes/5.15.0/changelog", "release-notes/5.15.0/upgrade-guide"]
                },
                {
                    type: "category",
                    label: "5.14.0",
                    items: ["release-notes/5.14.0/changelog", "release-notes/5.14.0/upgrade-guide"]
                },
                {
                    type: "category",
                    label: "5.13.0",
                    items: ["release-notes/5.13.0/changelog", "release-notes/5.13.0/upgrade-guide"]
                },
                {
                    type: "category",
                    label: "Older Releases",
                    items: [
                        {
                            type: "category",
                            label: "5.12.0",
                            items: [
                                "release-notes/5.12.0/changelog",
                                "release-notes/5.12.0/upgrade-guide"
                            ]
                        },
                        {
                            type: "category",
                            label: "5.11.1",
                            items: [
                                "release-notes/5.11.1/changelog",
                                "release-notes/5.11.1/upgrade-guide"
                            ]
                        },
                        {
                            type: "category",
                            label: "5.11.0",
                            items: [
                                "release-notes/5.11.0/changelog",
                                "release-notes/5.11.0/upgrade-guide"
                            ]
                        },
                        {
                            type: "category",
                            label: "5.10.0",
                            items: [
                                "release-notes/5.10.0/changelog",
                                "release-notes/5.10.0/upgrade-guide"
                            ]
                        },
                        {
                            type: "category",
                            label: "5.9.0",
                            items: [
                                "release-notes/5.9.0/changelog",
                                "release-notes/5.9.0/upgrade-guide"
                            ]
                        },
                        {
                            type: "category",
                            label: "5.8.0",
                            items: [
                                "release-notes/5.8.0/changelog",
                                "release-notes/5.8.0/upgrade-guide"
                            ]
                        },
                        {
                            type: "category",
                            label: "5.7.0",
                            items: [
                                "release-notes/5.7.0/changelog",
                                "release-notes/5.7.0/upgrade-guide"
                            ]
                        },
                        {
                            type: "category",
                            label: "5.6.0",
                            items: [
                                "release-notes/5.6.0/changelog",
                                "release-notes/5.6.0/upgrade-guide"
                            ]
                        },
                        {
                            type: "category",
                            label: "5.5.0",
                            items: [
                                "release-notes/5.5.0/changelog",
                                "release-notes/5.5.0/upgrade-guide"
                            ]
                        },
                        {
                            type: "category",
                            label: "5.4.0",
                            items: [
                                "release-notes/5.4.0/changelog",
                                "release-notes/5.4.0/upgrade-guide"
                            ]
                        },
                        {
                            type: "category",
                            label: "5.3.0",
                            items: ["release-notes/5.3.0/changelog"]
                        }
                    ]
                }
            ]
        },
        "webiny-telemetry"
    ]
};
