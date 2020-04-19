<script>
    import Card from './Card.svelte';
</script>

<style>
:global(html) {
    height: 100%;
    box-sizing: border-box;
}

:global(body) {
    margin: 20px;
    padding: 20px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    scroll-behavior: smooth;
    text-rendering: optimizeSpeed;
    line-height: 1.5;
    color: #212223;
    
    display: flex;
    flex-direction: column;
    justify-content: center;
}
</style>

<Card site="https://icanhazips.com/" showResponse="no" />

<Card site="https://icanhazip.com/" showResponse="yes" />

<Card site="https://icanhazip.com/" showResponse="no" />

<Card site="https://asymptomatic.net/" showResponse="no" />

<Card site="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.0/jquery.min.js" showResponse="no" />

<Card site="http://ss.owenw.com/monitor.svg" showResponse="no" />

<Card site="https://cdn.jsdelivr.net/npm/jquery@3.2.1/src/core.min.js" showResponse="no" />

<Card site="https://ajax.googleapis.com/ajax/libs/mootools/1.6.0/mootools.min.js" showResponse="no" />

<Card site="https://ajax.aspnetcdn.com/ajax/respond/1.4.2/respond.min.js" showResponse="no" />

<Card site="https://code.jquery.com/jquery-3.5.0.slim.min.js" showResponse="no" />
