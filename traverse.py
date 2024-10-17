import os
import re
from urllib.parse import urlparse

# Regex to capture both Markdown links and HTML <a> tag links
link_pattern = re.compile(r'\[([^\]]+)\]\(([^)]+)\)|<RouteLink\s+to=["\']([^"\']+)["\']')

# Function to extract links from a markdown file
def extract_links(file_path):
    links = []
    with open(file_path, 'r') as file:
        content = file.read()
        # Find all markdown links and HTML anchor links
        matches = link_pattern.findall(content)
        for match in matches:
            link = match[1] if match[1] else match[2]  # Handle both formats
            # Parse the URL to remove fragment (hash portion)
            parsed_link = urlparse(link)
            clean_link = parsed_link.path  # Only retain the path (without the fragment)
            if clean_link.endswith('.md'):  # Only consider markdown files as valid links
                links.append(clean_link)
            else:
                links.append(clean_link + '.md')
    return links

# Function to build a graph of documents from a folder of Markdown files
def build_graph(folder_path):
    graph = {}
    # Iterate over all files in the folder
    for file_name in os.listdir(folder_path):
        if file_name.endswith('.md'):  # Only process markdown files
            file_path = os.path.join(folder_path, file_name)
            links = extract_links(file_path)  # Extract links from the file
            graph[file_name] = links  # Add the links to the graph
    return graph

# DFS traversal function
def dfs(document, visited, graph):
    visited.add(document)
    print(f"Visiting: {document}")  # Output the current document

    # Visit each linked document
    for neighbor in graph.get(document, []):
        if neighbor not in visited:
            dfs(neighbor, visited, graph)

# Main function to perform the DFS traversal
def traverse_documents(start_document, folder_path):
    graph = build_graph(folder_path)  # Build the graph from markdown files
    visited = set()  # Track visited documents
    dfs(start_document, visited, graph)

# Example usage
folder_path = './content'  # Folder where markdown files are stored
start_document = 'index.md'  # Start traversal from this file
traverse_documents(start_document, folder_path)
