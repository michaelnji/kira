# Client-Side Data Fetching

- Stores = primary data layer (source of truth)
- Composables = facade between stores and consumers
- Consumers (components/pages) call composables only
- Stores unwrap only data field from Nexus-Req
- Error/loading states handled in stores/composables
- Facade layer optional only for trivial stores