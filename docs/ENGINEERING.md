# Engineering decisions

## Problem and user journey
Turn a robotics interface prototype into a coherent learning portal: find a reference article, browse modules, and track completion across visits. English/Turkish switching supports the same core workflow.

## Decisions and trade-offs
| Decision | Reason | Trade-off |
|---|---|---|
| Replace placeholder shop/download flows with learning modules | Every prominent action should lead somewhere useful | No ecommerce or firmware-distribution functionality |
| Persist progress locally with validation | Useful continuity without accounts or a backend | Progress is browser-specific and can be cleared |
| Hash routing and relative assets | Support static hosting under a repository subdirectory | URLs include a hash fragment |
| Bundle a local SVG instead of missing remote images | Predictable rendering and fewer runtime dependencies | A simple illustration rather than hardware photography |
| Keep animation cleanup and reduced-motion support | Respect navigation lifecycle and motion preferences | Accessibility still needs broader assistive-technology testing |
| Retain normal Vite build plus documented fallback | Preserve the standard development path while verifying a constrained local environment | The portable fallback is Windows-specific |

## Evidence and next experiments
Local checks covered lint, two progress-state tests, a portable production bundle, language switching, wiki filtering and persistence after reload. Full mobile/browser and screen-reader coverage is not claimed. Next: test keyboard and small-screen flows, add end-to-end tests for search and progress, review inherited educational content with a domain expert, and conduct a short task-based usability study before expanding features.

## Three-minute walkthrough
1. Open the portal and switch language.
2. Search the wiki for a topic and open a matching article.
3. Complete one learning module, reload, and show that progress persists.
4. Explain the choice of local state and static hosting.
5. Show the progress tests and explain which browser behaviors still need automated coverage.
