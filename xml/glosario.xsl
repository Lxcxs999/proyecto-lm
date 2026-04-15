<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:template match="/">
        <html>
            <head>
                <title>Glosario Botánico - Jardinería Verdana</title>
                <style>
                    
                    body {
                        font-family: 'Montserrat', sans-serif;
                        background-color: #f9fdf9; /* Un verde súper clarito */
                        color: #333;
                        max-width: 800px;
                        margin: 0 auto;
                        padding: 40px 20px;
                    }
                    
                    h1 {
                        text-align: center;
                        color: #2E7D32; /* Tu verde oscuro */
                        border-bottom: 2px solid #2E7D32;
                        padding-bottom: 10px;
                        margin-bottom: 40px;
                    }
                    
                    .termino-box {
                        background-color: white;
                        border-left: 5px solid #4CAF50; /* Un verde vivo */
                        padding: 20px;
                        margin-bottom: 20px;
                        border-radius: 0 8px 8px 0;
                        box-shadow: 0 2px 5px rgba(0,0,0,0.05);
                    }
                    
                    h2 {
                        margin-top: 0;
                        color: #2E7D32;
                        font-size: 1.2em;
                    }
                    
                    p {
                        margin-bottom: 0;
                        line-height: 1.6;
                    }
                </style>
            </head>
            <body>
                <h1>Glosario Botánico</h1>
                
                <xsl:for-each select="glosario/termino">
                    <div class="termino-box">
                        <h2><xsl:value-of select="nombre"/></h2>
                        <p><xsl:value-of select="definicion"/></p>
                    </div>
                </xsl:for-each>
                
            </body>
        </html>
    </xsl:template>
</xsl:stylesheet>