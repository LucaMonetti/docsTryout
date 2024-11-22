#!/bin/bash

# # Verifica se il file modified_files.txt esiste
# if [[ ! -f modified_files.txt ]]; then
#   git diff --name-only HEAD^ HEAD | grep '^docs/.*\.md$' | sed 's|^docs/||' > modified_files.txt || true
# fi

# Percorso del filtro Lua e del template
LUA_FILTER="custom-filter.lua"
TEMPLATE="template.tex"
TEMPLATE_COMPOSED="template-composed.tex"
SECTION="## Versione PDF"

# Elabora tutti i file nelle cartelle specificate come argomenti
for folder in "$@"; do
  if [[ -d "$folder" ]]; then
    echo "Elaborazione della cartella: $folder"

    # Trova tutti i file .md nella cartella e sottocartelle
    filepath="${folder}/$(basename $folder).md"
    output_pdf="${folder}/$(basename $folder).pdf"
    pandoc $(find "$folder" -type f -name "*.md") --lua-filter="$LUA_FILTER" --template="$TEMPLATE_COMPOSED" -o "$output_pdf"

    # Controllo se la sezione è presente
    if grep -q "$SECTION" "$filepath"; then
        echo "La sezione '$SECTION' è presente nel file $filepath."
    else
        echo "La sezione '$SECTION' non è presente nel file $filepath."
        echo "" >> "$filepath"
        echo "" >> "$filepath"
        echo "## Versione PDF" >> "$filepath"
        echo "[Visualizza Versione PDF]($(basename $folder).pdf)" >> "$filepath"
    fi
  else
    echo "Percorso non valido: $folder"
  fi
done


# Funzione per elaborare un singolo file
process_file() {
  local filepath="$1"

  # Verifica se il file non è vuoto
  if [[ -n "$filepath" ]]; then
    # Estrai il nome del file senza estensione e il percorso
    filename=$(basename "$filepath" .md)
    output_dir=$(dirname "$filepath")

    # Costruisci il percorso di output per il PDF
    output_pdf="${output_dir}/${filename}.pdf"

    # Esegui Pandoc
    echo "Elaborazione di $filepath -> $output_pdf"
    pandoc "$filepath" --lua-filter="$LUA_FILTER" --template="$TEMPLATE" -o "$output_pdf"

    # Controllo se la sezione è presente
    if grep -q "$SECTION" "$filepath"; then
        echo "La sezione '$SECTION' è presente nel file $filepath."
    else
        echo "La sezione '$SECTION' non è presente nel file $filepath."
        echo "" >> "$filepath"
        echo "" >> "$filepath"
        echo "## Versione PDF" >> "$filepath"
        echo "[Visualizza Versione PDF](${filename}.pdf)" >> "$filepath"
    fi

    # Verifica se il comando ha avuto successo
    if [[ $? -eq 0 ]]; then
      echo "PDF generato con successo: $output_pdf"
    else
      echo "Errore durante la generazione del PDF per $filepath"
    fi
  fi
}

# Se il file modified_files.txt esiste, processalo
if [[ -f modified_files.txt ]]; then
  while IFS= read -r filepath; do
    process_file "$filepath"
  done < modified_files.txt
fi